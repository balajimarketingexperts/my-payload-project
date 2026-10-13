"use client";

import React from "react";
import RegistrationForm from "./registration-form";

export interface HeroSectionProps {
  children?: React.ReactNode;
}

export function HeroSection({ children }: HeroSectionProps = {}) {
  return (
    <section className="relative w-full overflow-hidden px-4 py-8 sm:px-6 md:py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:justify-between">
        {/* Left Column: Heading & CTA */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Best Digital Marketing Institute in <span className="text-blue-600">Rohini</span>
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg md:text-xl">
            Advance your career with industry-recognized certifications, real client projects, and dedicated placement support.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#apply"
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-center font-semibold text-white shadow-md hover:bg-blue-700 sm:w-auto"
            >
              Enroll Now
            </a>
            <a
              href="#apply"
              className="w-full rounded-lg border border-gray-300 px-6 py-3.5 text-center font-semibold text-gray-700 hover:bg-gray-50 sm:w-auto"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Right Column: Hero Form / Image */}
        <div className="w-full max-w-md lg:w-1/2">
          {/* Form or Image Container */}
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
            {children || (
              <RegistrationForm
                title="Book Free Demo Class"
                subtitle="Join Balaji Marketing Institute in Rohini"
                badge="Rohini Campus · Admissions Open"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
