const selectNerveName = (selectedNerve) => {
    const nerve = selectedNerve.toLowerCase();
    
    //Ulnar Nerve
    if (nerve === 'ulnar nerve' || nerve === 'ulnar branch' || nerve === 'ulnar') return 'Ulnar Nerve 1';
    if (nerve === 'dorsal cutaneous branch' || nerve === 'dorsal cutaneous nerve' || nerve === 'dorsal cutaneous') return 'Dorsal Cutaneous Branch';
    if (nerve === 'palmar cutaneous branch' || nerve === 'palmar cutaneous nerve' || nerve === 'palmar cutaneous') return 'Palmar Cutaneous Branch';
    if (nerve === 'hypothenar branch' || nerve === 'hypothenar nerve' || nerve === 'hypothenar') return 'Hypothenar Branch';
    if (nerve === 'digital branch' || nerve === 'digital nerve' || nerve === 'digital') return 'Digital Branch';
    if (nerve === 'deep motor branch' || nerve === 'deep motor nerve' || nerve === 'deep motor') return 'Deep Motor Branch';
    
    //Median Nerve
    if (nerve === 'median nerve' || nerve === 'median branch' || nerve === 'median') return 'Median Nerve 1';
    if (nerve === 'anterior interosseous nerve' || nerve === 'anterior interosseous branch' || nerve === 'anterior interosseous') return 'Anterior Interosseous Nerve';
    if (nerve === 'recurrent motor nerve' || nerve === 'recurrent motor branch' || nerve === 'recurrent motor') return 'Recurrent Motor Branch';
    
    //Brachial Plexus
    if (nerve === 'c5 cervical nerve' || nerve === 'c5 cervical branch' || nerve === 'c5 cervical' || nerve === 'c5') return 'C5 Cervical Nerve 1';
    if (nerve === 'c6 cervical nerve' || nerve === 'c6 cervical branch' || nerve === 'c6 cervical' || nerve === 'c6') return 'C6 Cervical Nerve 1';
    if (nerve === 'c7 cervical nerve' || nerve === 'c7 cervical branch' || nerve === 'c7 cervical' || nerve === 'c7') return 'C7 Cervical Nerve';
    if (nerve === 'c8 cervical nerve' || nerve === 'c8 cervical branch' || nerve === 'c8 cervical' || nerve === 'c8') return 'C8 Cervical Nerve';
    if (nerve === 't1 cervical nerve' || nerve === 't1 cervical branch' || nerve === 't1 cervical' || nerve === 't1') return 'T1 Thoracic Nerve 1';
    if (nerve === 'dorsoscapular nerve' || nerve === 'dorsoscapular branch' || nerve === 'dorsoscapular') return 'Dorsoscapular Nerve';
    if (nerve === 'long thoracic nerve' || nerve === 'long thoracic branch' || nerve === 'long thoracic') return 'Long Thoracic Nerve';
    if (nerve === 'superior trunk') return 'Superior Trunk';
    if (nerve === 'suprascapular nerve' || nerve === 'suprascapular branch' || nerve === 'suprascapular') return 'Suprascapular Nerve 1';
    if (nerve === 'anterior division') return 'Anterior Division';
    if (nerve === 'lateral cord') return 'Lateral Cord 1';
    if (nerve === 'lateral pectoral nerve' || nerve === 'lateral pectoral branch' || nerve === 'lateral pectoral') return 'Lateral Pectoral Nerve';
    if (nerve === 'musculocutaneous nerve' || nerve === 'musculocutaneous branch' || nerve === 'musculocutaneous') return 'Musculocutaneous Branch';    
    if (nerve === 'middle trunk') return 'Middle Trunk 1';
    if (nerve === 'posterior division') return 'Posterior Division';
    if (nerve === 'posterior cord') return 'Posterior Cord 1';
    if (nerve === 'upper subscapular nerve' || nerve === 'upper subscapular branch' || nerve === 'upper subscapular') return 'Upper Subscapular Nerve';    
    if (nerve === 'thoracodorsal nerve' || nerve === 'thoracodorsal branch' || nerve === 'thoracodorsal') return 'Thoracodorsal Nerve';    
    if (nerve === 'lower subscapular nerve' || nerve === 'lower subscapular branch' || nerve === 'lower subscapular') return 'Lower Subscapular Nerve';    
    if (nerve === 'first intercostal nerve' || nerve === 'first intercostal branch' || nerve === 'first intercostal') return 'First Intercostal Nerve';    
    if (nerve === 'inferior trunk') return 'Inferior Trunk 1';
    if (nerve === 'medial cord') return 'Medial Cord 1';
    if (nerve === 'medial pectoral nerve' || nerve === 'medial pectoral branch' || nerve === 'medial pectoral') return 'Medial Pectoral Nerve';
    if (nerve === 'medial brachial cutaneous nerve' || nerve === 'medial brachial cutaneous branch' || nerve === 'medial brachial cutaneous') return 'Medial Brachial Cutaneous Nerve';
    if (nerve === 'medial antebrachial cutaneous nerve' || nerve === 'medial antebrachial cutaneous branch' || nerve === 'medial antebrachial cutaneous') return 'Medial Antebrachial Cutaneous Nerve';

    else 
        return '';

};

export default selectNerveName;