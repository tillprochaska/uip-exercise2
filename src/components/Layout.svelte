<style>
    .columns {
        display: flex;
        width: 100%;
        min-height: 100vh;
    }

    .sidebar {
        width: 18rem;
        flex-shrink: 0;
        flex-grow: 0;

        border-right: 1px solid var(--gray-400);
        background-color: var(--gray-100);
    }

    .sidebar-content {
        position: sticky;
        top: 0;
        padding: var(--spacing-unit);
    }

    main {
        width: 100%;
        max-width: var(--max-width);
        flex-shrink: 1;
        flex-grow: 1;
        margin-left: auto;
        margin-right: auto;
        padding: var(--spacing-unit);
    }

    @media screen and (min-width: 1500px) {
        main {
            margin: unset;
            padding-left: var(--spacing-unit-l);
            padding-right: var(--spacing-unit-l);
        }
    }
</style>

<div class="columns">
    <div class="sidebar hide-print">
        <div class="sidebar-content">
            <slot name="sidebar" />
        </div>
    </div>

    <main>
        <slot />
    </main>
</div>
