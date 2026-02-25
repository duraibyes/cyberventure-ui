import { useState } from "react";
import SpeakerSponsorDialog from "./SpeakerSponsorDialog";
import SponsorDialog from "./SponsorDialog";

export default function EventCTA() {
    const [openSpeakerDialog, setOpenSpeakerDialog] = useState(false);
    const [openSponsorDialog, setOpenSponsorDialog] = useState(false);

    const onSpeakerClose = () => {
        setOpenSpeakerDialog(false);
        setOpenSponsorDialog(false);
    }

    const onSponsorClose = () => {
        setOpenSponsorDialog(false);
        setOpenSpeakerDialog(false);
    }

    const onOpenSpeakerDialog = () => {
        setOpenSpeakerDialog(true);
        setOpenSponsorDialog(false);
    }

    const onOpenSponsorDialog = () => {
        setOpenSponsorDialog(true);
        setOpenSpeakerDialog(false);
    }

    return (
        <section className="py-24 bg-white">

            <div className="container mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Collaborate With CyberVenture
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Join our global cybersecurity community as a speaker or strategic partner.
                    Contribute insights, share expertise, and shape the future of digital security.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-8">

                    {/* Primary Button */}
                    <button className="px-10 py-4 
                             bg-gradient-to-r from-orange-500 to-red-600
                             text-white font-semibold 
                             rounded-xl shadow-md
                             transition-all duration-300
                             hover:scale-105 hover:shadow-lg"
                        onClick={onOpenSpeakerDialog}
                    >
                        Apply as Speaker
                    </button>

                    {/* Secondary Button */}
                    <button className="px-10 py-4 
                             border-2 border-orange-500 
                             text-orange-600 font-semibold 
                             rounded-xl
                             transition-all duration-300
                             hover:bg-gradient-to-r 
                             hover:from-orange-500 
                             hover:to-red-600
                             hover:text-white hover:scale-105"
                        onClick={onOpenSponsorDialog}
                    >
                        Apply as Sponsor
                    </button>

                </div>

            </div>
            <SpeakerSponsorDialog
                open={openSpeakerDialog}
                onClose={onSpeakerClose}
            />
            <SponsorDialog
                open={openSponsorDialog}
                onClose={onSponsorClose}
            />
        </section>
    );
}