export default function Modal({ isOpen, onClose, title, message, type = "info", autoClose = false }) {
    if (!isOpen) {
        return null;
    }

    const bgColor = type === "success" ? "bg-success" : type === "warning" ? "bg-warning" : "bg-info";
    const textColor = type === "success" ? "text-white" : type === "warning" ? "text-dark" : "text-white";

    if (autoClose) {
        return (
            <div style={{
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1050,
                maxWidth: "400px"
            }}>
                <div className={`card p-3 ${bgColor} ${textColor}`} style={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                    minWidth: "300px"
                }}>
                    <p className="mb-0">{message}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-overlay" style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050
        }}>
            <div className={`modal-content card p-4 ${bgColor} ${textColor}`} style={{
                maxWidth: "400px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                margin: "auto"
            }}>
                {title && <h5 className="mb-2">{title}</h5>}
                <p className="mb-3">{message}</p>
                {onClose && (
                    <button
                        className={`btn ${type === "success" ? "btn-light" : "btn-secondary"} w-100`}
                        onClick={onClose}
                    >
                        Close
                    </button>
                )}
            </div>
        </div>
    );
}
