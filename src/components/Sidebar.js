
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Ai2 from "./Ai2";
import './componentStyle/SidebarStyle.css';


export default function SizeDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="AiSidebar md:w-20rem lg:w-30rem">
                <h2>Sidebar</h2>
                <p>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    import Ai from "./components/Ai"; */}
                    <Ai2/>
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right aibtn" onClick={() => setVisible(true)}> AI   </Button>
        </div>
    )
}
        