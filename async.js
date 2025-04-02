async function fetchPost() {
    try {
        // Récupération du post depuis l'API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Vérification si la réponse est OK
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        // Conversion de la réponse en JSON
        const data = await response.json();
        
        // Extraction uniquement du titre et du corps
        const { title, body } = data;
        
        // Retourne seulement ces deux propriétés
        return { title, body };
    } catch (error) {
        console.error('Erreur lors de la récupération du post:', error);
        throw error;
    }
}