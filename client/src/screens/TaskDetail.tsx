import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Task } from '../model/interfaces';

interface TaskDetailsProps {
    task: Task;
}
const TaskDetail: React.FC<TaskDetailsProps> = ({ task }) => {
    return (
        <View>
            <Text>TaskDetail</Text>
        </View>
    )

}

export default TaskDetail