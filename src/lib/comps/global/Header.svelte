<script>
    import { navigating } from '$app/stores';
    import {Icon} from '@steeze-ui/svelte-icon'
    import {Bars3CenterLeft} from '@steeze-ui/heroicons'

    let open = false;

    let toggleOpen = () => open = !open;
    let closeOpen = () => open = false;

    $: if($navigating) closeOpen();
</script>

<header class="flex flex-col items-center main-container">
    <a href="/" class="btn btn-ghost p-0 w-48 h-24 mt-8"><img alt="logo" class="object-contain w-full h-full" src="/svg/logo.svg"></a>
    <div class="-md:dropdown my-8" class:dropdown-open={open}>
        <label for="ignore" tabindex="0" class="btn btn-outline btn-primary w-[70vw] m-1 md:hidden justify-between" on:click={toggleOpen}>
            <Icon src={Bars3CenterLeft} size="25" class='text-[hsl(var(--p) / var(--tw-text-opacity))]'/>
            {!open ? "Open" : "Close"}
            <Icon src={Bars3CenterLeft} size="25" class='text-transparent'/>
        </label>
        <input id="ignore" class="hidden">
        <nav class="dropdown-content w-full">
            <ul class="w-full menu menu-horizontal flex-col md:flex-row rounded-box p-2 bg-base-200">
                <li class="w-full md:w-auto"><a href="/services" class="justify-center md:justify-start w-full md:w-auto">Services</a></li>
                <li class="w-full md:w-auto"><a href="/products" class="justify-center md:justify-start w-full md:w-auto">Products</a></li>
                <li class="w-full md:w-auto"><a href="/faq" class="justify-center md:justify-start w-full md:w-auto">FAQ</a></li>
                <li class="w-full md:w-auto" tabindex="0">
                    <a href="/#" class="justify-center md:justify-start w-full md:w-auto">
                        Pre & Post Care
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul class="p-2 bg-base-200 w-full md:w-auto z-50 shadow">
                        <li><a on:click={toggleOpen} href="/pdf/propeel-care.pdf" target="_blank">Pro Peel</a></li>
                        <li><a on:click={toggleOpen} href="/pdf/microneedling-care.pdf" target="_blank">Microneedling</a></li>
                        <li><a on:click={toggleOpen} href="/pdf/dermaplaning-care.pdf" target="_blank">Dermaplaning</a></li>
                    </ul>
                </li>
                <li class="w-full md:w-auto" tabindex="0">
                    <a href="/#" class="justify-center md:justify-start w-full md:w-auto">
                        Forms
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul class="p-2 bg-base-200 w-full md:w-auto z-50 shadow">
                        <li><a on:click={toggleOpen} href="/forms/advanced-treatments">Advanced Treatments</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</header>