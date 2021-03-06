//이진 탐색 트리는 자료 탐색이 편리하고 데이터 삽입과 삭제가 빠르다!
class Node{
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    setRoot(data){
        this.root = new Node(data);
    }
    find(node, data){
        if(node.data === data){
            console.log(`데이터 ${data}이/가 존재합니다.`);
            return node;
        }
        else if(node.data > data){
            if(node.left === null){
                console.log(`데이터 ${data}이/가 존재하지 않습니다.`);
                return null;
            }
            this.find(node.left, data);
        }
        else if(node.data < data){
            if(node.right === null){
                console.log(`데이터 ${data}이/가 존재하지 않습니다.`);
                return;
            }
            this.find(node.right, data);
        }
    }
    insert(node, data){
        if(node.data === data){
            console.log(`${data}은/는 이미 들어있는 데이터입니다. 중복 삽입 불가능.`);
            return;
        }
        else if(node.data > data){
            if(node.left != null){
                this.insert(node.left, data);
            }
            else{
                node.left = new Node(data);
                console.log(`데이터 ${data}을/를 삽입했습니다.`);
                return;
            }
        }
        else if(node.data < data){
            if(node.right != null){
                this.insert(node.right, data);
            }
            else{
                node.right = new Node(data);
                console.log(`데이터 ${data}을/를 삽입했습니다.`);
                return;
            }
        }
    }
    delete(parentNode, currentNode, data){
        if(currentNode.data === data){              //현재 데이터가 내가 원하는 데이터인 경우(원하는 값을 찾았음.)
            if(currentNode.left === null && currentNode.right === null){    //1. 현재 노드에게 자식 노드가 없는 경우
                if(parentNode.left.data === data){      //현재 노드가 부모 노드의 왼쪽에 있는 경우
                    parentNode.left = null;             //부모 노드의 왼쪽을 없애버림
                }
                else{
                    parentNode.right = null;            //그게 아니면 부모 노드의 오른쪽을 없앰
                }
            }
            else if(currentNode.left === null){         //2. 현재 노드의 왼쪽만 비어있는 경우
                if(parentNode.left.data === data){      //현재 노드가 부모의 왼쪽 노드인 경우
                    parentNode.left = currentNode.right;//현재 노드의 오른쪽을 부모의 왼쪽 노드로 연결함.
                }
                else{
                    parentNode.right = currentNode.right;
                }
            }
            else if(currentNode.right === null){        //2. 현재 노드의 오른쪽만 비어있는 경우
                if(parentNode.left.data === data){
                    parentNode.left = currentNode.left;
                }
                else{
                    parentNode.right = currentNode.left;
                }
            }
            else{
                if(parentNode.left.data === data){
                    parentNode.left = currentNode.right;
                }
                else{
                    parentNode.right = currentNode.right;
                }
            }
            console.log("데이터를 삭제했습니다.");
            return;
        }
        else if(currentNode.data > data){
            if(currentNode.left === null){
                console.log("데이터가 존재하지 않습니다.");
                return;
            }
            this.delete(currentNode, currentNode.left, data);
        }
        else if(currentNode.data < data){
            if(currentNode.right === null){
                console.log("데이터가 존재하지 않습니다.");
                return;
            }
            this.delete(currentNode, currentNode.right, data);
        }
    }
}

let BST = new BinarySearchTree();

BST.setRoot(7);

BST.insert(BST.root, 3);
BST.insert(BST.root, 1);
BST.insert(BST.root, 5);
BST.insert(BST.root, 10);
BST.insert(BST.root, 8);
//
// console.log('root -> left -> left : ', BST.root.left.left.data);
// console.log('root -> left -> right :', BST.root.left.right.data);
// console.log('root -> right -> left :', BST.root.right.left.data);

BST.insert(BST.root, 4);
BST.insert(BST.root, 12);
BST.insert(BST.root, 15);
//
// console.log('root -> right -> right :', BST.root.right.right.data);
// console.log(
//     'root -> right -> right -> right :',
//     BST.root.right.right.right.data,
// );

// BST.delete(2);
// BST.delete(8);



// 전위 순회
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
// let BST = new BinarySearchTree();
//
// BST.setRoot(7);
//
// BST.insert(BST.root, 3);
// BST.insert(BST.root, 1);
//
// BST.insert(BST.root, 5);
// BST.insert(BST.root, 4);
// BST.insert(BST.root, 12);
// BST.insert(BST.root, 10);
// BST.insert(BST.root, 8);
//
// console.log('root -> left -> left : ', BST.root.left.left.data);
// console.log('root -> left -> right :', BST.root.left.right.data);
// console.log('root -> right -> left :', BST.root.right.left.data);
//
// // BST.insert(BST.root, 4);
// // BST.insert(BST.root, 12);
// // BST.insert(BST.root, 15);
//
preOrder(BST.root);
console.log("----------");
inOrder(BST.root);
console.log("----------");
postOrder(BST.root);

// var preOrder = [7, 3, 1, 5, 4, 12, 10, 8];
// var inOrder = [1, 3, 4, 5, 7, 8, 10, 12];
//
// findPostOrder(preOrder, inOrder)
// var sentence = ""
// function findPostOrder(preOrder, inOrder){
//
//     var root = preOrder[0];
//     var median = inOrder.indexOf(root); //4
//     // console.log(preOrder.slice(1, median+1));
//     // console.log(inOrder.slice(0, median));
//     if(preOrder.length > 1 && inOrder.length > 1) {
//         findPostOrder(preOrder.slice(1, median + 1), inOrder.slice(0, median));
//         findPostOrder(preOrder.slice(median + 1,), inOrder.slice(median + 1,));
//     }
//     console.log(root);
// }