import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
  try {
    const body = await req.json();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          first_name: body.firstName,
          last_name: body.lastName,
          email: body.email,
          organisation: body.organisation,
          enquiry_type: body.enquiryType,
          message: body.message,
        },
      ]);

    if (error) {
      throw error;
    }

    await resend.emails.send({
      from: "VFRI Contact <onboarding@resend.dev>",
      to: ["your@email.com"],
      subject: `New Contact Form Submission`,
      html: `
        <h2>New Message</h2>

        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Organisation:</strong> ${body.organisation}</p>
        <p><strong>Enquiry:</strong> ${body.enquiryType}</p>

        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err.message,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});