#pragma strict
import SimpleJSON;
import BoardSpace;

public var spaceObject : GameObject;
public var firstSpace : GameObject;

function Start () {
    var space : BoardSpace = firstSpace.GetComponent(BoardSpace);
    for (var i = 0; i < 10; i++){
        var newSpace : GameObject = Instantiate(spaceObject, Vector3(0, 0, i*10), transform.rotation);
        newSpace.transform.parent = transform;
        space.addNext(newSpace.GetComponent(BoardSpace));
        space = newSpace.GetComponent(BoardSpace);
    }
}

function Update () {

}
