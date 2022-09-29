<script>
    import Page from "../comps/Page.svelte";
    import Ingredient from "./comps/Ingredient.svelte";
    import FadeIn from "../comps/FadeIn.svelte";
</script>

<Page pad hTitle="Skin Care Tips" hContent="Tips on skin care with ingredients in common products to stay away from.">
    <FadeIn duration="1.25s">
        <div class="flex justify-center">
            <h2 class="text-center text-[1.75rem] font-medium inline-block w-[35rem]">
                My #1 tip is to check all your makeup, skincare, haircare
                and body wash for any <span class="font-bold">PORE CLOGGING INGREDIENTS!</span>
            </h2>
        </div>
    </FadeIn>
    <FadeIn duration="1.25s" delay=".1s">
        <p class="py-10">
            Below is a list of ingredients to avoid in all skin care,
            acne care, makeup, and hair products. <span class="italic font-medium">Do not ever put
        anything on your skin or your hair without checking the
        ingredients first</span>, even if it says “Won’t clog pores” or
            “Noncomedogenic” on the bottle.
        </p>
    </FadeIn>
    <div class="border border-neutral-300 rounded-xl cursor-crosshair">
        <div class="flex justify-between p-6 flex-wrap">
            <FadeIn duration="1.25s" delay=".2s">
                <ul>
                    <Ingredient ingredient="Acetylated Lanolin Alcohol"/>
                    <Ingredient ingredient="Acetylated Lanolin"/>
                    <Ingredient ingredient="Algae Extract"/>
                    <Ingredient ingredient="Algin"/>
                    <Ingredient ingredient="Argan Oil"/>
                    <Ingredient ingredient="Butyl Stearate"/>
                    <Ingredient ingredient="Carrageenan"/>
                    <Ingredient ingredient="Cetearyl Alcohol"/>
                    <Ingredient ingredient="Cetyl Acetate"/>
                    <Ingredient ingredient="Chlorella"/>
                    <Ingredient ingredient="Chondrus Crispus"/>
                    <Ingredient ingredient="Coal Tar"/>
                    <Ingredient ingredient="Cocoa Butter"/>
                    <Ingredient ingredient="Coconut Alkanes"/>
                    <Ingredient ingredient="Coconut Butter"/>
                    <Ingredient ingredient="Coconut Oil"/>
                    <Ingredient ingredient="Colloidal Sulfur"/>
                    <Ingredient ingredient="Cotton Awws Oil"/>
                    <Ingredient ingredient="Cotton Seed Oil"/>
                    <Ingredient ingredient="D & C Red # 17"/>
                    <Ingredient ingredient="D & C Red # 21"/>
                    <Ingredient ingredient="D & C Red # 3"/>
                    <Ingredient ingredient="D & C Red # 30"/>
                    <Ingredient ingredient="D & C Red # 36"/>
                    <Ingredient ingredient="Decyl Oleate"/>
                    <Ingredient ingredient="Dioctyl Succinate"/>
                    <Ingredient ingredient="Disodium Monooleamido"/>
                    <Ingredient ingredient="Ethoxylated Lanolin"/>
                </ul>
            </FadeIn>
            <FadeIn duration="1.25s" delay=".3s">
                <ul>
                    <Ingredient ingredient="Ethylhexyl Palmitate"/>
                    <Ingredient ingredient="Glyceryl Stearate SE"/>
                    <Ingredient ingredient="Glyceryl-3 Diisostearate"/>
                    <Ingredient ingredient="Hexadecyl Alcohol"/>
                    <Ingredient ingredient="Hydrogenated Vegetable Oil"/>
                    <Ingredient ingredient="Isocetyl Alcohol"/>
                    <Ingredient ingredient="Isocetyl Stearate"/>
                    <Ingredient ingredient="Isodecyl Oleate"/>
                    <Ingredient ingredient="Isopropyl Isostearate"/>
                    <Ingredient ingredient="Isopropyl Linolate"/>
                    <Ingredient ingredient="Isopropyl Myristate"/>
                    <Ingredient ingredient="Isopropyl Palmitate"/>
                    <Ingredient ingredient="Isostearyl Isostearate"/>
                    <Ingredient ingredient="Isostearyl Neopentanoate"/>
                    <Ingredient ingredient="Kelp"/>
                    <Ingredient ingredient="Laminaria Digitata Extract"/>
                    <Ingredient ingredient="Laminaria Saccharina Extract"/>
                    <Ingredient ingredient="Laureth-23"/>
                    <Ingredient ingredient="Laureth-4"/>
                    <Ingredient ingredient="Lauric Acid"/>
                    <Ingredient ingredient="Mink Oil"/>
                    <Ingredient ingredient="Moroccan Oil"/>
                    <Ingredient ingredient="Myristic Acid"/>
                    <Ingredient ingredient="Myristyl Lactate"/>
                    <Ingredient ingredient="Myristyl Myristate"/>
                    <Ingredient ingredient="Octyl Palmitate"/>
                    <Ingredient ingredient="Octyl Stearate"/>
                    <Ingredient ingredient="Oleth-3"/>
                    <Ingredient ingredient="Oleyl Alcohol"/>
                </ul>
            </FadeIn>
            <FadeIn duration="1.25s" delay=".4s">
                <ul>
                    <Ingredient ingredient="Olive Oil"/>
                    <Ingredient ingredient="PEG 16 Lanolin"/>
                    <Ingredient ingredient="PEG 200 Dilaurate"/>
                    <Ingredient ingredient="PEG 8 Stearate"/>
                    <Ingredient ingredient="PG Monostearate"/>
                    <Ingredient ingredient="PPG 2 Myristyl Propionate"/>
                    <Ingredient ingredient="Plankton"/>
                    <Ingredient ingredient="Polyglyceryl-3 Diisostearate"/>
                    <Ingredient ingredient="Potassium Chloride"/>
                    <Ingredient ingredient="Propylene Glycol Monostearate"/>
                    <Ingredient ingredient="Red Algae"/>
                    <Ingredient ingredient="Sea Whip Extract"/>
                    <Ingredient ingredient="Seaweed"/>
                    <Ingredient ingredient="Shark Liver Oil-Squalene"/>
                    <Ingredient ingredient="Shea Butter"/>
                    <Ingredient ingredient="Sodium Laureth Sulfate"/>
                    <Ingredient ingredient="Sodium Lauryl Sulfate"/>
                    <Ingredient ingredient="Solulan 16"/>
                    <Ingredient ingredient="Sorbitan Oleate"/>
                    <Ingredient ingredient="Soybean Oil"/>
                    <Ingredient ingredient="Spirulina"/>
                    <Ingredient ingredient="Steareth 10"/>
                    <Ingredient ingredient="Stearic Acid Tea"/>
                    <Ingredient ingredient="Stearyl Heptanoate"/>
                    <Ingredient ingredient="Sulfated Castor Oil"/>
                    <Ingredient ingredient="Sulfated Jojoba Oil"/>
                    <Ingredient ingredient="Wheat Germ Glyceride"/>
                    <Ingredient ingredient="Wheat Germ Oil"/>
                    <Ingredient ingredient="Xylene"/>
                </ul>
            </FadeIn>
        </div>
    </div>
    <FadeIn duration="1.25s">
        <p class="mt-8">
            <span class="font-medium text-[1.25rem]">Warnings</span><br><br>
            Natural oils can be some of the worst offenders, like cocoa butter and
            coconut oil which are found in many “organic” skin care lines. Other oils
            such as jojoba, olive, and lanolin are mildly comedogenic and can be a
            problem if formulated with other comedogenic ingredients. Some prescription
            products like the cream form of Retin-A have pore cloggers. Many over-the-counter
            acne medications also have pore clogging ingredients. “Oil-free” products can
            be comedogenic.<br><br><br>
        </p>
    </FadeIn>
    <FadeIn duration="1.25s" delay=".1">
        <p>
            <span class="font-medium text-[1.25rem]">Makeup</span><br><br>
            Loose powder, mineral make-up tends to be the safest choice, but still should be
            checked. Bare Minerals Original Formula loose powder foundation is a safe choice;
            however, the newer Bare Minerals Matte is NOT a safe choice—it contains soil
            minerals. We do not recommend any of the pressed Bare Minerals blushes, bronzers,
            or veils. Any pressed or liquid products should also be checked for pore-clogging
            ingredients.
        </p>
    </FadeIn>
</Page>