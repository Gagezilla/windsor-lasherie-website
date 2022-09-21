/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const modal = `
    <!--googleoff: all-->
    <div id="first-open-modal" class="modal modal-open">
      <div class="modal-box text-center">
        <h3 class="text-[#6c3514] tracking-wide font-medium text-4xl font-gistesy">Hi I'm Allison, Skin Care Therapist at the Windsor Lasherie!</h3>
        <p class="py-5 text-[#6c3514]">The Windsor Lasherie is home to several beauty and spa professionals who offer a range of services. You can view all available services when you click the Book Now button. Thanks for visiting!</p>
        <div class="modal-action">
          <button onclick="(() => {
              document.querySelector('#first-open-modal').classList.remove('modal-open')
          })()" class="btn btn-primary btn-outline mx-auto">Close</button>
        </div>
      </div>
    </div>
    <!--googleon: all-->
    `

    let resolved;

    let notBeenHere = event.cookies.get("been-here") !== "true"

    if (notBeenHere) {
        event.cookies.set("been-here", "true")
    }

    resolved = await resolve(event, {transformPageChunk: ({ html }) => {
        return html.replace("%custom.body%", notBeenHere ? modal : "");
    }})

    return resolved;
}