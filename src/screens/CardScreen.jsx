import { Image, ScrollView, Text, View } from 'react-native'
import tw from "twrnc"
import LoyalCard from '../components/LoyalCard'

const CardScreen = () => {

    const negocios = [
        {
            image: "https://1000marcas.net/wp-content/uploads/2019/11/Instagram-Logo.png",
            name: "Instagram",
            description: "Red social donde puedes comunicarte con tus amigos",
            puntos: "250"
        },
        {
            image: "https://1000marcas.net/wp-content/uploads/2022/07/Logo-KFC.png",
            name: "KFC",
            description: "Comida mexicana y el mejor sazón de mexico en Zipaquira",
            puntos: "250"
        },
        {
            image: "https://1000marcas.net/wp-content/uploads/2022/07/Logo-Togos.png",
            name: "Togos",
            description: "Comida mexicana y el mejor sazón de mexico en Zipaquira",
            puntos: "250"
        },
        {
            image: "https://1000marcas.net/wp-content/uploads/2022/07/Logo-Taco-Bell.png",
            name: "Taco Bell",
            description: "Comida mexicana y el mejor sazón de mexico en Zipaquira",
            puntos: "250"
        },
        {
            image: "https://cdn.create.vista.com/downloads/01c1ee03-88c7-4564-a66b-96fbb560d67e_1024.jpeg",
            name: "Donuts",
            description: "Comida mexicana y el mejor sazón de mexico en Zipaquira",
            puntos: "250"
        },
        {
            image: "https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png",
            name: "McDonalds",
            description: "Comida mexicana y el mejor sazón de mexico en Zipaquira",
            puntos: "250"
        },
    ]


    return (
        <ScrollView style={tw`bg-white p-6 w-full h-full`}>
            <Text style={tw`font-medium text-2xl`}>Tarjetas de fidelidad</Text>
            <View style={tw`flex-1 flex-row mt-10 gap-4 flex-wrap mb-14`}>
                {negocios.map(n => <LoyalCard image={n.image} name={n.name} puntos={n.puntos}/>)}
            </View>
        </ScrollView>
    )
}

export default CardScreen