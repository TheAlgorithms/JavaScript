class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question('Enter the data: ', (data) => {
            data = parseInt(data);
            if (data === -1) {
                resolve(null);
            } else {
                const root = new Node(data);
                console.log(`Enter data for inserting in left of ${data}`);
                buildTree().then((left) => {
                    console.log(`Enter data for inserting in right of ${data}`);
                    buildTree().then((right) => {
                        root.left = left;
                        root.right = right;
                        resolve(root);
                    });
                });
            }
        });
    });
}

function inorder(root) {
    if (root === null) {
        return;
    }
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
}

function preorder(root) {
    if (root === null) {
        return;
    }
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
}

function postorder(root) {
    if (root === null) {
        return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
}

async function main() {
    const root = await buildTree();

    console.log('Inorder traversal is:');
    inorder(root);

    console.log('Preorder traversal is:');
    preorder(root);

    console.log('Postorder traversal is:');
    postorder(root);
}

main();
