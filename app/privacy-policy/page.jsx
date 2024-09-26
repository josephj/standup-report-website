export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-4">
                We respect your privacy and are committed to protecting your personal data. This Privacy Policy
                describes how we collect, use, and handle your personal information when you use our website and
                services.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Collection and Access of Google User Data</h2>
            <p className="mb-4">
                Our application accesses Google Calendar events data through Google Workspace APIs. We use this data
                solely to provide our calendar-related services and features. We do not access any other types of Google
                user data.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Personal Information</h2>
            <p className="mb-4">
                We use the information we collect, including Google user data, solely for the purpose of providing and
                improving our direct services to you. We explicitly state that any data obtained through Google
                Workspace APIs is not used to develop, improve, or train generalized AI and/or ML models.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Sharing of Personal Information</h2>
            <p className="mb-4">
                We do not share, transfer, or disclose your user data, including Google user data, to any third parties,
                except in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>When required by applicable law or legal process</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, acquisition, or sale of assets, with your consent</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Retention and Deletion of Personal Information</h2>
            <p className="mb-4">
                We retain your personal information, including Google user data, only for as long as necessary to
                provide our services to you. Typically, this means we delete your data immediately after processing it
                for the requested service.
            </p>
            <p className="mb-4">
                You can revoke our access to your Google Calendar data at any time by removing our app{`'`}s permissions
                in your Google Account settings. To request deletion of your data or verify that no data remains in our
                systems, please contact us at josephj{`[@]`}flycoder.io. We will process your request and confirm
                deletion within 7 days.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Security of Personal Information</h2>
            <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the {`"Last updated"`} date at the top of this policy. We
                encourage you to review this privacy policy frequently to stay informed of how we are protecting your
                information.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
            <p className="mb-4">
                If you have any questions or concerns about this privacy policy or our data practices, please contact us
                at josephj{`[@]`}flycoder.io.
            </p>
        </div>
    );
}
