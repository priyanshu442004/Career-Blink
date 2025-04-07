import React, { useState, useCallback } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    label: "Time & Space Complexity",
    position: { x: -60, y: 50 },
    subtopics: [
      "Big-O Notation (O(1), O(n), O(log n), etc.)",
      "Best, Worst & Average Case Analysis",
      "Time vs Space Trade-offs",
      "Amortized Analysis"
    ]
  },
  {
    id: "2",
    label: "Recursion",
    position: { x: 200, y: 150 },
    subtopics: [
      "Base Case & Recursive Case",
      "Recursive Tree & Stack Memory",
      "Tail Recursion",
      "Backtracking Techniques",
      "Recursion vs Iteration"
    ]
  },
  {
    id: "3",
    label: "Arrays",
    position: { x: 400, y: 150 },
    subtopics: [
      "Array Basics & Indexing",
      "Traversing, Insertion, Deletion",
      "Sliding Window Technique",
      "Two Pointer Technique",
      "Prefix Sum",
      "Kadane’s Algorithm"
    ]
  },
  {
    id: "4",
    label: "Searching & Sorting",
    position: { x: 300, y: 400 },
    subtopics: [
      "Linear & Binary Search",
      "Sorting Algorithms (Bubble, Insertion, Selection)",
      "QuickSort & MergeSort",
      "Counting Sort, Radix Sort",
      "Lower Bound & Upper Bound",
      "In-place vs Stable Sorting"
    ]
  },
  {
    id: "5",
    label: "Linked List",
    position: { x: 600, y: 150 },
    subtopics: [
      "Singly & Doubly Linked List",
      "Insertion & Deletion Operations",
      "Reverse a Linked List",
      "Cycle Detection (Floyd's Algorithm)",
      "Merge Two Sorted LLs",
      "Linked List to Stack/Queue"
    ]
  },
  {
    id: "6",
    label: "Stacks & Queues",
    position: { x: 800, y: 150 },
    subtopics: [
      "Stack (LIFO), Queue (FIFO)",
      "Circular Queue, Priority Queue",
      "Monotonic Stack & Queue",
      "Balanced Parentheses Problem",
      "Next Greater/Smaller Element",
      "Stack using Queue & vice versa"
    ]
  },
  {
    id: "7",
    label: "Trees",
    position: { x: 1000, y: 150 },
    subtopics: [
      "Binary Tree & Binary Search Tree (BST)",
      "Tree Traversals (Inorder, Preorder, Postorder)",
      "Balanced Trees (AVL, Red-Black Tree)",
      "Heap (Min/Max)",
      "Segment Trees, Trie",
      "Lowest Common Ancestor (LCA)",
      "Diameter of Tree"
    ]
  },
  {
    id: "8",
    label: "Graphs",
    position: { x: 1200, y: 150 },
    subtopics: [
      "Graph Representations (Adjacency List/Matrix)",
      "DFS & BFS",
      "Topological Sorting",
      "Shortest Path (Dijkstra, Bellman-Ford)",
      "Minimum Spanning Tree (Prim’s, Kruskal’s)",
      "Cycle Detection (Directed/Undirected)",
      "Union-Find / Disjoint Set Union (DSU)"
    ]
  },
  {
    id: "9",
    label: "Dynamic Programming",
    position: { x: 1400, y: 150 },
    subtopics: [
      "Recursion to DP Transition",
      "Tabulation & Memoization",
      "1D & 2D DP",
      "Knapsack Problems (0/1, Unbounded)",
      "LCS, LIS, Edit Distance",
      "DP on Trees/Graphs",
      "Bitmask DP"
    ]
  }
];


// Convert initialNodes into nodes and edges
const initialEdges = initialNodes.map((node, index) => {
  if (index === 0) return null;
  return { id: `e${index}`, source: `${index}`, target: `${index + 1}`, animated: true };
}).filter(Boolean);

const DSA = () => {
  const [nodes, setNodes] = useState(initialNodes.map(({ id, label, position }) => ({
    id,
    position,
    data: { label },
  })));
  
  const [edges, setEdges] = useState(initialEdges);
  const [expandedNodes, setExpandedNodes] = useState({});

  const onNodeClick = useCallback((event, node) => {
    const isExpanded = expandedNodes[node.id];
  
    if (isExpanded) {
      // Collapse: Remove subtopics and reset Node 4 position if node.id === "3"
      setNodes((prevNodes) =>
        prevNodes
          .map((n) => {
            if (n.id === "4" && node.id === "2") {
              return { ...n, position: { ...n.position, y: 400 } };
            }
            return n.id.startsWith(`${node.id}-`) ? null : n;
          })
          .filter(Boolean)
      );
  
      setEdges((prevEdges) =>
        prevEdges.filter(
          (e) => !(e.source === node.id && e.target.startsWith(`${node.id}-`))
        )
      );
    } else {
      // Expand: Add subtopic nodes, shift Node 4 downward if node.id === "3"
      const clickedNode = initialNodes.find((n) => n.id === node.id);
      if (clickedNode && clickedNode.subtopics) {
        const newSubtopicNodes = clickedNode.subtopics.map((subtopic, index) => ({
          id: `${node.id}-${index}`,
          position: {
            x: node.position.x + 100,
            y: node.position.y + (index + 1) * 50,
          },
          data: { label: subtopic },
        }));
  
        const newEdges = newSubtopicNodes.map((subNode) => ({
          id: `e${node.id}-${subNode.id}`,
          source: node.id,
          target: subNode.id,
          animated: true,
        }));
  
        setNodes((prevNodes) =>
          prevNodes
            .map((n) => {
              if (n.id === "4" && node.id === "2") {
                return { ...n, position: { ...n.position, y: 500 } };
              }
              return n;
            })
            .concat(newSubtopicNodes)
        );
  
        setEdges((prevEdges) => [...prevEdges, ...newEdges]);
      }
    }
  
    setExpandedNodes((prev) => ({
      ...prev,
      [node.id]: !isExpanded,
    }));
  }, [expandedNodes]);
  

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default DSA;
