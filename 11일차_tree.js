class Tree{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function createTree(){
    var node1 = new Tree(1);
    var node2 = new Tree(2);
    var node3 = new Tree(3);
    var node4 = new Tree(4);
    var node5 = new Tree(5);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;

    return node1;
}

function createDeepTree(){
    var node7 = new Tree(7);
    var node3 = new Tree(3);
    var node10 = new Tree(10);
    node7.left = node3;
    node7.right = node10;

    var node1 = new Tree(1);
    var node5 = new Tree(5);
    node3.left = node1;
    node3.right = node5;

    var node4 = new Tree(4);
    var node12 = new Tree(12);
    node5.left = node4;
    node4.left = node12;

    var node8 = new Tree(8);
    node10.left = node8;

    return node7;
}

//전위 순회
function preOrder(node){
    if(node === null){
        return;
    }
    console.log(node);
    preOrder(node.left);
    preOrder(node.right);
}

//중위 순회
function inOrder(node){
    if(node === null){
        return;
    }
    inOrder(node.left);
    console.log(node);
    inOrder(node.right);
}

//후위 순회
function postOrder(node){
    if(node === null){
        return;
    }
    postOrder(node.left);
    postOrder(node.right);
    console.log(node);
}

//가장 깊은 노드를 찾기
var depth = 0;
var deepest = 0;
var deepestNode = null;
function findDeepest(node){
    if(node === null){
        return;
    }
    if(depth >= deepest){
        deepest = depth;
        deepestNode = node;
    }
    depth++;
    findDeepest(node.left);
    findDeepest(node.right);
    depth--;
}

var root = createTree();
preOrder(root);
console.log("----------");
inOrder(root);
console.log("----------");
postOrder(root);

var root1 = createDeepTree();
findDeepest(root1);
console.log(`깊이 : ${deepest}, 노드 : ${deepestNode.data}`);