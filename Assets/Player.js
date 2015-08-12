#pragma strict
public var space : BoardSpace;
public var coins : int;
public var stars : int;
private var advancing = false;
function Start () {

}

function Update () {
}

function StartAdvance() {
    if (!advancing)
    {
        Advance();
        return true;
    }
    return false;
}

function Advance() {
    advancing = true;
    if (space) {
        if (space.nextSpaces.length == 1) {
            space = space.nextSpaces[0];
            while(Vector3.Distance(transform.position, space.gameObject.transform.position) > 1)
            {
                transform.position = Vector3.Lerp(transform.position, space.gameObject.transform.position, .0500000);
                yield;
            }
            space.land(self);
        }

    }
    advancing = false;
}
