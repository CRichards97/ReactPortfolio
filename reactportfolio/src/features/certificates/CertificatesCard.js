import { CardImgOverlay, CardImg, Card , CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CertificatesCard = ({certificate}) => {
    const { id, image, name } = certificate;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name} />
                    <CardImgOverlay>
                        <CardTitle>{name}</CardTitle>
                    </CardImgOverlay>
            </Card>
        </Link>
    );
};
export default CertificatesCard;