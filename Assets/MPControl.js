#pragma strict
public var player : int = 1;
function Start () {

}

function Update () {
    transform.Translate(Vector3(Input.GetAxis("Horizontal"+player), 0, Input.GetAxis("Vertical"+player)));
    
    if(Input.GetButton("Fire" + player)) {
        transform.position = Vector3(Random.Range(1, 10), 0 , Random.Range(1, 10));
    }
    
}
