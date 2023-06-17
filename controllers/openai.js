const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {

    const { prompt } = req.body;
    
    try {
        const response = await openai.createImage({
            prompt: prompt,
            n: 2,
            size: "512x512"
        })

        const result = response.data.data
        
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {generateImage}