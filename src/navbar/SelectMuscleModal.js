const selectMuscleName = (selectedMuscle) => {
    String.prototype.capitalize = function(){
        return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
    };
    const muscle = selectedMuscle.toLowerCase().capitalize();

    if (muscle === 'Flexor Digitorum Profundus III & IV' ||
        muscle === 'Flexor Digitorum Profundus 3 & 4' ||
        muscle === 'Flexor Digitorum Profundus III And IV' ||
        muscle === 'Flexor Digitorum Profundus 3 And 4')
    return 'Flexor Digitorum Profundus III & IV';

    if (muscle === 'Dorsal Interossei')
    return '4 Dorsal Interossei';

    if (muscle === 'Palmar Interossei')
    return '3 Palmar Interossei';

    if (muscle === 'Lumbricals III & IV' ||
        muscle === 'Lumbricals 3 & 4' ||
        muscle === 'Lumbricals III And IV' ||
        muscle === 'Lumbricals 3 And 4')
    return 'Lumbricals III & IV';

    if (muscle === '1/2 Flexor Pollicis Brevis (Deep Head)' ||
        muscle === 'Flexor Pollicis Brevis Deep Head' ||
        muscle === 'Flexor Pollicis Brevis (Deep Head)' ||
        muscle === 'Flexor Pollicis Brevis(Deep Head)' ||
        muscle === 'Flexor Pollicis Brevis Deep Head' ||
        muscle === 'Flexor Pollicis Brevis-Deep Head' ||
        muscle === 'Flexor Pollicis Brevis - Deep Head')
    return '1/2 Flexor Pollicis Brevis (Deep Head)';

    if (muscle === 'Flexor Digitorum Profundus I & II' ||
        muscle === 'Flexor Digitorum Profundus 1 & 2' ||
        muscle === 'Flexor Digitorum Profundus I And II' ||
        muscle === 'Flexor Digitorum Profundus 1 And 2')
    return 'Flexor Digitorum Profundus I & II';

    if (muscle === 'Lumbricals I & II' ||
        muscle === 'Lumbricals 1 & 2' ||
        muscle === 'Lumbricals I And II' ||
        muscle === 'Lumbricals 1 And 2')
    return 'Lumbricals I & II';

    if (muscle === '1/2 Flexor Pollicis Brevis (Superficial Head)' ||
        muscle === 'Flexor Pollicis Brevis Superficial Head' ||
        muscle === 'Flexor Pollicis Brevis (Superficial Head)' ||
        muscle === 'Flexor Pollicis Brevis(Superficial Head)' ||
        muscle === 'Flexor Pollicis Brevis Superficial Head' ||
        muscle === 'Flexor Pollicis Brevis-Superficial Head' ||
        muscle === 'Flexor Pollicis Brevis - Superficial Head')
    return '1/2 Flexor Pollicis Brevis (Superficial Head)';

    else return muscle;
};

const selectMuscleModal = (selectedMuscle) => {
    const muscle = selectMuscleName(selectedMuscle);

    //Ulnar Nerve
    if (muscle === 'Flexor Carpi Ulnaris' ||
        muscle === 'Flexor Digitorum Profundus III & IV' ||
        muscle === 'Opponens Digiti Minimi' ||
        muscle === 'Abductor Digiti Minimi' ||
        muscle === 'Flexor Digiti Minimi' ||
        muscle === 'Palmaris Brevis' ||
        muscle === '4 Dorsal Interossei' ||
        muscle === '3 Palmar Interossei' ||
        muscle === 'Lumbricals III & IV' ||
        muscle === 'Adductor Pollicis' ||
        muscle === '1/2 Flexor Pollicis Brevis (Deep Head)')
    return 'Ulnar Nerve 1';

    if (muscle === 'Dorsal Cutaneous Branch')
    return 'Dorsal Cutaneous Branch';

    if (muscle === 'Palmar Cutaneous Branch')
    return 'Palmar Cutaneous Branch';

    if (muscle === 'Opponens Digiti Minimi' ||
        muscle === 'Abductor Digiti Minimi' ||
        muscle === 'Flexor Digiti Minimi')
    return 'Hypothenar Branch';

    if (muscle === 'Digital Branch')
    return 'Digital Branch';

    if (muscle === 'Palmaris Brevis' ||
        muscle === '4 Dorsal Interossei' ||
        muscle === '3 Palmar Interossei' ||
        muscle === 'Lumbricals III & IV' ||
        muscle === 'Adductor Pollicis' ||
        muscle === '1/2 Flexor Pollicis Brevis (Deep Head)')
    return 'Deep Motor Branch';
}
export default selectMuscleName;