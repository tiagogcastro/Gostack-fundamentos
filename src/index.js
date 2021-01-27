import React, {useEffect, useState} from 'react';
import {View ,SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Projeto com React Native - ${Date.now()}`,
      owner: 'Tiago Gonçalves'
    });
    const project = response.data;

    setProjects([...projects, project]);
  }

  async function handleRemoveProject(id) {
    await api.delete(`/projects/${id}`)

    const newProjects = projects.filter( repository => repository.id !== id);

    setProjects(newProjects);
  }

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor= "#7159c1"/>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      {projects <= 0 ? 
        <Text style={styles.notProjectText}>Não há projetos no momento, adicione um agora!</Text> 
        :
        <FlatList
          style={styles.flatlist} 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item: project}) => (
            <View style={styles.viewProject}>
              <Text style={styles.projectText}>
                {project.title}
              </Text>
              <Text style={styles.projectText}>
                {project.owner}
              </Text>
              <TouchableOpacity 
                style={styles.buttonRemove} 
                onPress={() => handleRemoveProject(project.id)}
                >
                <Text style={styles.buttonRemoveText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        
        }
        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'flex-start',
    width: '100%'
  },
  flatlist: {
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  // Cada projeto
  viewProject: {
    marginBottom: 20,
    maxWidth: '100%',
    paddingBottom:20,
    marginHorizontal: 'auto' | 20,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    borderStyle: "solid",
  },

  projectText: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonRemove: {
    backgroundColor: 'red',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  buttonRemoveText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#fff',
    marginTop: 'auto',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },

  notProjectText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 30,
  }
})