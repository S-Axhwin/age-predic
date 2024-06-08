"use server";

import { redirect } from "next/navigation";

const action = (Fdata: FormData) => {
    console.log(Fdata.get("name")); // get form data based on name prop
    //redirect can be used only in server components
    redirect("/"); 

}

export default action;  