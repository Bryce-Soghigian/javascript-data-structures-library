/**
 * THis is a directed graph crafted using an adj list
 * 
 * Methods:
 * Add vertex
 * add edge
 * 
 */


 class DirectedGraph{
     constructor(){
         this.list = {}
         this.size = 0
     }
     addVertex(vertex){
         this.list[vertex] = []
         this.size++
     }
     addEdge(vertex,destination){
        //If destination doesn't exist create it
        if(this.list[destination] === undefined){
            this.addVertex(destination)
            this.list[vertex].push(destination)

        }else{
            this.list[vertex].push(destination)
        }

     }
     dfs(startNode){
         let visited = {}
         const dfsVisit = at => {
             console.log(visited)
             if(visited[at]=== true){
                return
             }else{
                 visited[at] = true
                 let neighbors = this.list[at]
                 for(let i = 0;i<neighbors.length;i++){
                     dfsVisit(neighbors[i])
                 }
             }
         }
        //Lookup the value in our adj list
       dfsVisit(startNode)
       console.log(visited)

     }
     fetchGraph(){
         console.log(this.list,this.size)
         return this.list
     }

 }

const graph = new DirectedGraph();
graph.addVertex("A")
graph.addEdge("A","B")
graph.addEdge("B","D")
graph.addEdge("D","C")
graph.addEdge("C","A")
graph.addEdge("A","D")
graph.dfs("A")
// graph.fetchGraph()