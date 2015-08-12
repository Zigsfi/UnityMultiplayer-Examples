#pragma strict
public var player : int = 1;
function Start () {

}

function Update () {
    transform.Translate(Vector3(Input.GetAxis("Horizontal"+player), 0, Input.GetAxis("Vertical"+player)));
}
