const selectNerveLink = (selectedNerve) => {
    //Ulnar Nerve
    if (selectedNerve === 'Ulnar Nerve 1' ||
        selectedNerve === 'Dorsal Cutaneous Branch' ||
        selectedNerve === 'Palmar Cutaneous Branch' ||
        selectedNerve === 'Hypothenar Branch' ||
        selectedNerve === 'Digital Branch' ||
        selectedNerve === 'Deep Motor Branch') 
    {
        return '/ulnar-nerve';
    }

    //Median Nerve
    if (selectedNerve === 'Median Nerve 1' ||
        selectedNerve === 'Anterior Interosseous Nerve' ||
        selectedNerve === 'Recurrent Motor Branch')
    {
        return '/median-nerve';
    }

    //Brachial Plexus
    if (selectedNerve === 'C5 Cervical Nerve 1' ||
        selectedNerve === 'C6 Cervical Nerve 1' ||
        selectedNerve === 'C7 Cervical Nerve' ||
        selectedNerve === 'C8 Cervical Nerve' ||
        selectedNerve === 'T1 Thoracic Nerve 1' ||
        selectedNerve === 'Dorsoscapular Nerve' ||
        selectedNerve === 'Long Thoracic Nerve' ||
        selectedNerve === 'Superior Trunk' ||
        selectedNerve === 'Suprascapular Nerve 1' ||
        selectedNerve === 'Anterior Division' ||
        selectedNerve === 'Lateral Cord 1' ||
        selectedNerve === 'Lateral Pectoral Nerve' ||
        selectedNerve === 'Musculocutaneous Branch' ||
        selectedNerve === 'Middle Trunk 1' ||
        selectedNerve === 'Posterior Division 1' ||
        selectedNerve === 'Posterior Cord' ||
        selectedNerve === 'Upper Subscapular Nerve' ||
        selectedNerve === 'Thoracodorsal Nerve' ||
        selectedNerve === 'Lower Subscapular Nerve' ||
        selectedNerve === 'First Intercostal Nerve' ||
        selectedNerve === 'Inferior Trunk 1' ||
        selectedNerve === 'Medial Cord 1' ||
        selectedNerve === 'Medial Pectoral Nerve' ||
        selectedNerve === 'Medial Brachial Cutaneous Nerve' ||
        selectedNerve === 'Medial Antebrachial Cutaneous Nerve') 
    {
        return '/brachial-plexus';
    }

    else {
        return 'Please Enter a Correct Nerve';
    }
};

export default selectNerveLink;