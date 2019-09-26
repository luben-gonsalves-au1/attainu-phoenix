function valueFromEnd(head, k) {
    let counter = 1;
    let first = head;
    let second = head;
    whlile(counter <= k) {
        second = second.next;
        counter++;
    }
    if(second == null) {
        return first.value;
    }
    while(second.next != null) {
        first = first.next;
        second = second.next;
    }
    return first.next;
}