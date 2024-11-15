import {Menubar} from "primereact/menubar";
import {MenuItem} from "primereact/menuitem";

export default function Header() {

    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Basics',
            icon: 'pi pi-star',
            items: [
                {
                    label: 'Display Data',
                    icon: 'pi pi-fw pi-check',
                },
                {
                    label: 'Conditional Rendering',
                    icon: 'pi pi-fw pi-check',
                },
                {
                    label: 'Lists (foreach)',
                    icon: 'pi pi-fw pi-check',
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-check',
                }
            ]
        },
        {
            label: 'Hooks',
            icon: 'pi pi-star',
            items: [
                {
                    label: 'State Hook',
                    icon: 'pi pi-fw pi-check',
                },
                {
                    label: 'Context Hook',
                    icon: 'pi pi-fw pi-check',
                },
                {
                    label: 'Ref Hook',
                    icon: 'pi pi-fw pi-check',
                },
                {
                    label: 'Effect Hook',
                    icon: 'pi pi-fw pi-check',
                },
                {
                    label: 'Performance Hook',
                    icon: 'pi pi-fw pi-check',
                },
                {
                    label: 'Other Hook',
                    icon: 'pi pi-fw pi-check',
                },
                {
                    label: 'Your Custom Hook',
                    icon: 'pi pi-fw pi-check',
                }
            ]
        },
        {
            label: 'Routing',
            icon: 'pi pi-star',
            items: [
                {
                    label: 'reactrouter.com',
                    icon: 'pi pi-star',
                    url: 'https://reactrouter.com/en/main/start/tutorial#tutorial',
                }
            ]
        },
        {
            label: 'Primereact',
            icon: 'pi pi-star',
            items: [
                {
                    label: 'primereact.com',
                    icon: 'pi pi-star',
                    url: 'https://www.primereact.org/',
                }
            ]
        }
    ];

    return (
        <>
            <div className="card">
                <Menubar model={items}/>
            </div>
        </>
    );
}