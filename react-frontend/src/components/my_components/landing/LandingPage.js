import React from "react";
import TemplateDemo from "./HeaderMenuPage";
import BuilderInput from "./WhatDoYouWantComponent";

export default function LandingPage() {
return (
  <div>
    <TemplateDemo className="mb-5 "/>
    <h1 className="pt-5 flex justify-content-center">
        Let's make it happen
    </h1>
    <BuilderInput />
  </div>
);
}
