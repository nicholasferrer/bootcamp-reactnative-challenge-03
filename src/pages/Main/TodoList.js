import React from 'react';

import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';

const TodoList = ({ todos, dispatch }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {todos.map(todo => (
      <Text key={todo}>{todo}</Text>
    ))}

    <Button
      onPress={() => dispatch({ type: 'ADD_TODO', text: 'Novo Todo' })}
      title="Adicionar todo"
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
