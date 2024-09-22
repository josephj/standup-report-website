import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm">
                <Link
                    href="https://chromewebstore.google.com/detail/stand-up-report-generator/iiokonekdbnkbpbdoppdenommagiaheh"
                    className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80 mr-4"
                    target="_blank"
                >
                    Chrome Web Store
                </Link>
                <Link
                    href="/privacy-policy"
                    className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80 mr-4"
                >
                    Privacy Policy
                </Link>
                <Link
                    href="/terms-of-service"
                    className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80"
                >
                    Terms of Service
                </Link>
            </p>
        </footer>
    );
}
