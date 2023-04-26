import { Container, FeatureItem } from "@/components/atoms";
import Image from "next/image";
import React from "react";

export const FeatureList = ({ src, title, desc }) => {
  return (
    <section className="bg-[#203271] py-10">
      <Container>
        <div className="grid grid-cols-3 gap-8">
          <FeatureItem
            src={"./icon-calendar.svg"}
            title="Online appointment scheduling"
            desc="Allows users to schedule appointments with their healthcare
                    provider through the app."
          />
          <FeatureItem
            src={"./icon-bell.svg"}
            title="Medication reminders"
            desc="Allows users to schedule appointments with their healthcare
                    provider through the app."
          />
          <FeatureItem
            src={"./icon-camera.svg"}
            title="Virtual consultations"
            desc="Allows users to schedule appointments with their healthcare
                    provider through the app."
          />
        </div>
      </Container>
    </section>
  );
};
