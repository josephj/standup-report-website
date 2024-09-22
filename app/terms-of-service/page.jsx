export default function TermsOfService() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-4">
                Please read these Terms of Service {`("Terms", "Terms of Service")`} carefully before using our website.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
                By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part
                of the terms, you may not access the website.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Intellectual Property</h2>
            <p className="mb-4">
                The content on our website is owned by us and is protected by copyright, trademark, and other
                intellectual property laws.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">3. User Responsibilities</h2>
            <p className="mb-4">
                You are responsible for your use of the website and any content you provide, including compliance with
                applicable laws, rules, and regulations.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
            <p className="mb-4">
                We shall not be liable for any indirect, incidental, special, consequential or punitive damages
                resulting from your use of or inability to use the website.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to Terms</h2>
            <p className="mb-4">
                We reserve the right to modify or replace these Terms at any time. It is your responsibility to check
                the Terms periodically for changes.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us.</p>
        </div>
    );
}
