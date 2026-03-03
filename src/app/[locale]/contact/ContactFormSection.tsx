import styles from "@/src/styles/SubPage.module.css";

interface ContactFormSectionProps {
    labels: {
        name: string;
        email: string;
        message: string;
        send: string;
    };
}

export default function ContactFormSection({ labels }: ContactFormSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                        <label
                            htmlFor="name"
                            style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem" }}
                        >
                            {labels.name}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                background: "rgba(255, 255, 255, 0.05)",
                                color: "inherit",
                                fontFamily: "inherit",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem" }}
                        >
                            {labels.email}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                background: "rgba(255, 255, 255, 0.05)",
                                color: "inherit",
                                fontFamily: "inherit",
                            }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem" }}
                        >
                            {labels.message}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            style={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "8px",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                background: "rgba(255, 255, 255, 0.05)",
                                color: "inherit",
                                fontFamily: "inherit",
                                resize: "vertical",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: "12px 24px",
                            borderRadius: "8px",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "inherit",
                            fontFamily: "inherit",
                            fontSize: "1rem",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                        }}
                    >
                        {labels.send}
                    </button>
                </form>
            </div>
        </section>
    );
}
