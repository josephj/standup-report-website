export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-4">
                This Privacy Policy describes how we collect, use, and handle your personal information when you use our
                website.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
            <p className="mb-4">
                We may collect personal information that you provide directly to us, such as when you contact us or use
                our services.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our services, as well as to
                communicate with you.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
            <p className="mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access
                or disclosure.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Google Workspace APIs</h2>
            <p className="mb-4">
                We want to explicitly state that any data obtained through Google Workspace APIs is not used to develop,
                improve, or train generalized AI and/or ML models. We only use this data for the specific purposes of
                providing and improving our direct services to you, in accordance with Google{`'`}s API Services User
                Data Policy.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
    );
}
