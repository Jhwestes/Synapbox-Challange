import { Selector } from 'testcafe';

class friends{

        //locators for friends page
        searchFriends= Selector("#search-bar");
        searchButton= Selector('button').withExactText('Search');
        acceptButton= Selector('button').withExactText('Accept');
        sendRequestButton= Selector('button').withExactText('Friend Request');
        confirmMessage= Selector("#message-box");
        friendRequests= Selector("#request-list");
        myFriendsList= Selector("#my-friends");
        friendTag= Selector("#user-Tag");
        
        }

export default friends