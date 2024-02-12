import axios from "axios";
const DISCORD_WEBHOOK_URL = process.env.REACT_APP_DISCORD_WEBHOOK_URL;
function ContactDiscordService() {
    const Send = async (formData) => {
        const body = {
            content: "Une nouvelle demande de contact 💚",
            tts: false,
            embeds: [
                {
                    title: "CONTACT",
                    description: `**Prénom :** ${formData.firstname}\n
                    **Nom :** ${formData.lastName}\n
                    **Email :** __${formData.mail}__\n
                    **Téléphone :** ${formData.telephone}\n
                    **Pseudo Discord :** ${formData.discord}\n
                    **Nom d'association :** ${formData.nameAssociation}`,
                    color: 3654195,
                    fields: [
                        {
                            name: "Message",
                            value: formData.message,
                        }
                    ],
                    author: {
                        name: `${formData.firstname} ${formData.lastName} - ${formData.mail}`,
                    },
                    footer: {
                        text: "from fapefrei.com",
                    },
                    thumbnail: {
                        url: "https://fap-efrei.github.io/fapefrei-website/static/media/fap_logo.da61fbf8e143dd43c46e.png"
                    },
                }
            ]
        }
        try {
            const response = await axios({
                method: "post",
                url: `${DISCORD_WEBHOOK_URL}`,
                data: body,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        {
            Send,
        }
    )
}
export default ContactDiscordService;