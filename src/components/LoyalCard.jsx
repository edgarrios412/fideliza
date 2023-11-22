import { Image, Text, View } from 'react-native'
import tw from 'twrnc'

const LoyalCard = ({image = "https://cdn-icons-png.flaticon.com/512/5309/5309779.png", name = "Nombre del negocio", description = "Descripcion del negocio detallada", puntos = 0}) => {
    return (
        <View style={tw`bg-slate-50 rounded-xl w-full gap-2 flex-row`}>
            <Image
                style={tw`w-20 h-20 m-3 rounded-xl`}
                source={{ uri:image }}
            />
            <View style={tw`w-full`}>
                <Text style={tw`font-medium text-lg mt-1`}>{name}</Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={tw`font-normal text-sm mb-1 w-2/3`}>{description}</Text>
                <Text style={tw`font-normal text-sm text-gray-400`}>Tienes {puntos} puntos</Text>
            </View>
        </View>
    )
}

export default LoyalCard