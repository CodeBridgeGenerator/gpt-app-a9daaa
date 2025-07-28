import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Row, Col } from 'primereact/row';

const BuilderInput = () => {
  return (
    <div className="p-4 card">
      {/* Main Text Area and Start Button */}
      <div className="flex flex-column md:flex-row align-items-center gap-3 mb-4">
        <InputTextarea
          rows={7}
          autoResize
          placeholder="What do you want to build?"
          className="flex-1 border-round-top-3xl border-round-bottom-3xl"
        />
        <Button
          label="Start Now"
          icon="pi pi-send"
          className="p-button-primary"
        />
      </div>

      {/* Helper Text */}
      <p className="text-lg font-medium mb-2">Not sure where to start? Try one of these:</p>

      {/* Suggested Buttons */}
      <div className="grid justify-content-center flex-wrap gap-3 fadein animation-duration-1000 " style={{minHeight : '20px'}}>
        <Button
          label="Reporting Dashboard"
          icon="pi pi-chart-bar"
          className="p-button-secondary"
        />
        <Button
          label="Gaming Platform"
          icon="pi pi-desktop"
          className="p-button-secondary"
        />
        <Button
          label="Onboarding Portal"
          icon="pi pi-users"
          className="p-button-secondary"
        />
        <Button
          label="Networking App"
          icon="pi pi-share-alt"
          className="p-button-secondary"
        />
        <Button
          label="Room Visualizer"
          icon="pi pi-eye"
          className="p-button-secondary"
        />
      </div>
    </div>
  );
};

export default BuilderInput;
