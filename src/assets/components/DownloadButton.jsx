import PropTypes from 'prop-types';

const DownloadButton = ({ label, fileUrl, fileName, openInNewTab = false }) => {
    const handleDownload = () => {
        if (openInNewTab) {
            // Abre o arquivo em uma nova aba
            window.open(fileUrl, "_blank");
        } else {
            // Faz o download do arquivo diretamente
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileName || "download";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <button type="button" className="btn-style" onClick={handleDownload}>
            {label}
        </button>
    );
};

DownloadButton.propTypes = {
    label: PropTypes.string.isRequired,
    fileUrl: PropTypes.string.isRequired,
    fileName: PropTypes.string, 
    openInNewTab: PropTypes.bool, 
};

export default DownloadButton;

