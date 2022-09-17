<script>
    import Page from "$lib/comps/page-templates/page/Page.svelte";
    import Collapse from "$lib/comps/page-comps/services/Collapse.svelte";
    import FadeIn from "$lib/comps/global/FadeIn.svelte";
</script>

<Page title="Services"
      content="Our services are always customized to meet your skins specific needs at the time of your appointment.">

    <div class="flex flex-col gap-2">
        <FadeIn duration="1.25s">
            <Collapse title="Customized Professional Treatments"
                      content={[
                          {title: "45 min Glow Facial",
                          content: `Get glowing and on your way. This express
                          skin care treatment focuses on your top concern to
                          leave your skin feeling its best. Great for teens.`},

                          {title: "65 min Glow Facial",
                          content: `The ultimate customizable treatment addresses
                          multiple concerns.Depending on your skin's needs, it may
                          include enhanced technology such as ultrasonic, hi-frequency,
                          LED light therapy and a combination of professional-grade actives.`},

                          {title: "Bio-Trinity Wet Microderm Facial",
                          content: `Bio-Trinity’s wet microdermabrasion technology
                          utilizes manual and chemical exfoliation to gently yet effectively
                          target skin concerns while re-hydrating the skin in an all in
                          one amazing treatment. This upgraded facial is perfect for most
                          skin types and will leave your skin soft, radiant, and glowing.`}
                      ]}/>
        </FadeIn>

        <FadeIn duration="1.25s" delay=".1s">
            <Collapse title="Advanced Treatments*"
                      content={[
                          {title: "Microneedling Treatment",
                          content: `Microneedling activates the skin's repair process
                          and collagen production. This minimally-invasive treatment
                          uses the most advanced techniques to target dark spots,
                          wrinkles, and pores.`},

                          {title: "Pro Peel Treatment",
                          content: `A progressive 30 min treatment that focuses on improving
                          skin conditions and concerns such as acne, hyperpigmentation,
                          fine/deep lines, uneven skin tone and texture. This unique
                          three-acid approach provides deep exfoliation that is 100%
                          tailored to your skin.`},

                          {title: "Micropeel Treatment",
                          content: `This treatment combines wet microdermabrasion and the
                          pro peel to give accelerated results. This advanced 30 minute 2 in
                          one treatment targets multiple skin concerns as it renews,
                          brightens and clears breakouts.`}
                      ]}>
                <br><br><span class="italic">*Not for first time clients.</span>
            </Collapse>
        </FadeIn>

        <FadeIn duration="1.25s" delay=".2s">
            <Collapse title="Face Reality Acne Services"
                      content={[
                          {title: "Acne Bootcamp, Initial Consult",
                          content: `For new clients interested in joining the Face Reality
                          Acne Bootcamp program. This program is designed specifically to
                          help clear acne. During our consultation we will evaluate and
                          discuss all possible acne triggers. After a in-depth skin analysis,
                          you will receive an informational packet along with a customized
                          skin care regime and treatment plan created for you. Your initial
                          FR product purchase will average around $175.`},

                          {title: "FR Acne Treatment",
                          content: `As part of the Face Reality bootcamp this acne treatment
                          includes cleansing, enzyme or chemical peel exfoliation, extractions,
                          hi-frequency, and finishing products.`}
                      ]}/>
        </FadeIn>

        <FadeIn duration="1.25s" delay=".3s">
            <Collapse title="Body/Spa Treatments"
                      content={[
                          {title: "Back Facial",
                          content: `A deep cleansing and exfoliating facial type treatment
                          specifically for the back to smooth and hydrate neglected skin
                          in need of extra care.`},

                          {title: "Acne Back Treatment",
                          content: `This treatment focuses on clearing blemishes and impurities
                          on the back through a combination of chemical peel, extractions and
                          calming actives.`},

                          {title: "Deluxe Spa Facial",
                          content: `A deluxe spa facial for those looking to to settle in for
                          some serious Zen time. Your treatment begins with a 25 minute stress
                          relief back treatment for added relaxation after which you will
                          turn over and start a 60 min full sensory spa facial.`}
                      ]}/>
        </FadeIn>

        <FadeIn duration="1.25s" delay=".4s">
            <Collapse title="Glow Facial Add-ons"
                      content={[
                          {title: "Dermaplaning - $35"},

                          {title: "Microcurrent - $35"},

                          {title: "Multivitamin Exfoliant - $20"},

                          {title: "Gua Sha Massage - $20"}
                      ]}/>
        </FadeIn>

        <FadeIn duration="1.25s" delay=".5s">
            <Collapse title="Waxing"
                      content={[
                          {title: "Brows, Lip, Chin, Under Arms, Sideburns"}
                      ]}/>
        </FadeIn>

        <FadeIn duration="1.25s" delay=".6s">
            <Collapse title="Tinting"
                      content={[
                          {title: "Brows & Lashes"}
                      ]}/>
        </FadeIn>
    </div>
    <div class="flex justify-center">
        <a target="_blank"
           href="https://schedulicity.com/scheduling/wlf7wx/services"
           class="btn btn-primary btn-outline btn-wide mt-8">Book Appointment</a>
    </div>
</Page>