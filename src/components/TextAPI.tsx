import  React, { useContext, useEffect, } from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { GetCapsulesInterface, GetInfoInterface, GetRocketsInterface } from '../types';


interface TextApiProps {
    type: 'rocket' | 'capsule' | 'info',
    state:  GetInfoInterface | GetCapsulesInterface | GetRocketsInterface
}


    interface dataArr {
        title: string,
        data: string,
        api: keyof GetInfoInterface | keyof GetCapsulesInterface | keyof GetRocketsInterface
    }

  export const TextAPI: React.FC<TextApiProps> = (props) => {





    let data: dataArr[] = []

    if (props.type == 'capsule') {
         data = [
            {title: 'Номер капсулы', data: '', api: 'capsule_serial'},
            {title: 'Название капсулы', data: '', api: 'capsule_id'},
            {title: 'Статус', data: '', api: 'status'},
            {title: 'Дата запуска', data: '', api: 'original_launch'},
            {title: 'Детали', data: '', api: 'details'}
        ]

        dataApi()

    }
    if (props.type == 'info') {
        data = [
            {title: 'Название комрании', data: '', api: 'name'},
            {title: 'Создатель комрании', data: '', api: 'founder'},
            {title: 'Была создана', data: '', api: 'founded'},
            {title: 'Количество работников', data: '', api: 'employees'},
            {title: 'Количество ракет', data: '', api: 'vehicles'}
            ]

            dataApi()
    }

    if (props.type == 'rocket') {
        data = [
           {title: 'Ступени', data: '', api: 'stages'},
           {title: 'Boosters', data: '', api: 'boosters'},
           {title: 'Стоимость запуска', data: '', api: 'cost_per_launch'},
           {title: 'Дата первого запуска', data: '', api: 'first_flight'},
           {title: 'Страна', data: '', api: 'country'},
           {title: 'Wikipedia', data: '', api: 'wikipedia'},
           {title: 'Название ракеты', data: '', api: 'rocket_name'}

       ]

       dataApi()

   }


    
    function dataApi() {
        data.forEach((e) => {
            for (const [key, value] of Object.entries(props.state)) {
                if(e.api == key){
                    e.data = value as string
                }    
            }
        })      
    }
        


    const Item = ({ title, data, api }:dataArr) => (
            <Text style={Styles.tableText}>{title}: {data}</Text>
      )

    const renderItem = ({ item }: any) => {
        return (
            <Item title={item.title} data={item.data} api={item.api} />
        )

    }

    return (
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.api}
        />
    )

    }
const Styles = StyleSheet.create({
    tableText: {
        fontFamily: 'ProximaBold',
        marginTop: 20,
        fontSize: 20,
        marginLeft: 10,
        color: 'white'
    }
});



 
