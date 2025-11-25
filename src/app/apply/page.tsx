"use client";
import BannerWrapper from "@/components/about/AboutBannerWrapper";
import animationData from "@/../public/JSON/rocket-launch.json";
import ApplyForm from "@/components/forms/ApplyForm";

export default function ApplyPage() {
    return (

        <>
            <BannerWrapper
                animation={animationData}
                heading="Apply Form"
                subtitle="We’d love to hear from you. Reach out for support, queries, or collaborations."
            />

            <div className="container-global py-10">
                <ApplyForm />
            </div>



        </>

    );
};