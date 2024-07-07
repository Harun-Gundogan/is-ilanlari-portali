import React from 'react';
import { useParams } from 'react-router-dom';
import { is_ilanlari_veriler } from '../components/IlanList'; 

const IlanDetay = () => {
    const { id } = useParams(); 
    const ilan = is_ilanlari_veriler[id];

    if (!ilan) {
        return <div>İlan bulunamadı</div>;
    }

    return (
        <div className="ilan-detay">
            <h1>{ilan.job_title}</h1>
            <img src="D:\Çalışmalar\Unityacademy\is-ilan-portali\public\images" alt={ilan.job_title}/>
            <p>{ilan.job_description}</p>
            <p>Konum: {ilan.location}</p>
            <p>Kategori: {ilan.category}</p>
        </div>
    );
};

export default IlanDetay;

