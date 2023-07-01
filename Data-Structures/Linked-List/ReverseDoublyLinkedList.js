<script>
var head;

class Node
{
	constructor(val)
	{
		this.data = val;
		this.prev = null;
		this.next = null;
	}
}
	
/* Function to reverse a Doubly Linked List */
function reverse()
{
	var temp = null;
	var current = head;
	
	/* Swap next and prev for all nodes of
	doubly linked list */
	while (current != null)
	{
		temp = current.prev;
		current.prev = current.next;
		current.next = temp;
		current = current.prev;
	}

	/* Before changing head, check for the cases
	like empty list and list with only one node */
	if (temp != null)
	{
		head = temp.prev;
	}
}

// UTILITY FUNCTIONS
/* Function to insert a node at the beginning
of the Doubly Linked List */
function push(new_data)
{
	// Allocate node
	var new_node = new Node(new_data);
	
	/* Since we are adding at the beginning,
	prev is always NULL */
	new_node.prev = null;

	/* Link the old list of the new node */
	new_node.next = head;

	/* Change prev of head node to new node */
	if (head != null)
	{
		head.prev = new_node;
	}

	/* Move the head to point to the new node */
	head = new_node;
}

/* Function to print nodes in a given doubly
linked list This function is same as
printList() of singly linked list */
function printList(node)
{
	while (node != null)
	{
		document.write(node.data + " ");
		node = node.next;
	}
}

/* Let us create a sorted linked list to test
the functions Created linked list will be
10->8->4->2 */
push(2);
push(4);
push(8);
push(10);

document.write(
"Original linked list <br/>");
printList(head);

reverse();
document.write("<br/>");
document.write("The reversed Linked List is <br/>");
printList(head);
</script>

