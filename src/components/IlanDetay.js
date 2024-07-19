import React from 'react';
import { useParams } from 'react-router-dom';
import { is_ilanlari_veriler } from '../components/IlanList'; 
import { Link } from 'react-router-dom';

const IlanDetay = () => {
    const { id } = useParams(); 
    const ilan = is_ilanlari_veriler[id];

    if (!ilan) {
        return <div>İlan bulunamadı</div>;
    }

    return (
        <div className="ilan">
            <h1>{ilan.job_title}</h1>
            <img src="../images/job_image.jpg" alt={ilan.job_title}/>
            <p>{ilan.job_description}</p>
            <p>Konum: {ilan.location}</p>
            <p>Kategori: {ilan.category}</p>
            <Link className="anasayfa" to="/">Ana Sayfa</Link>
        </div>
    );
};

export default IlanDetay;
