const supabaseService = require('../services/supabaseService');

exports.getImages = async (req, res) => {
    try {
        const imageUrls = await supabaseService.getImageUrls();
        res.send(imageUrls);
    } catch (error) {
        console.error('Erro ao buscar imagens:', error);
        res.status(500).send({ error: 'Erro ao buscar imagens' });
    }
};
