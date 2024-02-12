import axios from "axios";
const DISCORD_WEBHOOK_URL = process.env.REACT_APP_DISCORD_WEBHOOK_URL;
function JoinDiscordService() {
    const Send = async (formData) => {
        const body = {
            content: "Une nouvelle demande d'adhésion 🤎",
            tts: false,
            embeds: [
                {
                    title: "ADHÉSION",
                    description: `**Prénom :** ${formData.firstname}\n
                    **Nom :** ${formData.lastName}\n
                    **Email :** __${formData.mail}__\n
                    **Téléphone :** ${formData.telephone}\n
                    **Pseudo Discord :** ${formData.discord}\n
                    **Pôle :** ${formData.pole}\n
                    **Promotion :** ${formData.promotion}\n
                    **Année :** ${formData.annee}\n`,
                    color: 9137237,
                    fields: [
                        {
                            name: "Motivation",
                            value: formData.motivation,
                        }
                    ],
                    author: {
                        name: `${formData.firstname} ${formData.lastName} - ${formData.mail}`,
                    },
                    footer: {
                        text: "from fapefrei.com"
                    },
                    thumbnail: {
                        url: "https://fap-efrei.github.io/fapefrei-website/static/media/fap_logo.da61fbf8e143dd43c46e.png"
                    }
                }
            ]
        }
        try {
            console.log(DISCORD_WEBHOOK_URL);
            const response = await axios({
                method: "post",
                url: `${DISCORD_WEBHOOK_URL}`,
                data: body,
                header: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        {
            Send,
        }
    );
}

export default JoinDiscordService;