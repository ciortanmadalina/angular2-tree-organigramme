import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TreeNode} from 'primeng/primeng';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TreeService {

constructor(private http: Http) {}

    getOrganigramme() {
        return this.http.get('organigramme.json')
                    .toPromise()
                    .then(res => this.jsonToTree(res.json().data))
                    .then(data => { return data; });
    }

    private jsonToTree(data : any) : TreeNode[]{
        let nodes :TreeNode[] =  <TreeNode[]> data;
        nodes = this.addStyles(nodes);
        return nodes;
    }

    /**
     * Recursive method which tranverses the graph in a Depth First Approach
     */
    private addStyles(nodes :TreeNode[]) : TreeNode[]{
        nodes.forEach( node => {
            node = this.addStylesToNode(node);
            if (node.children) {
                this.addStyles(node.children);
            }
        })
        return nodes;
    }

    /**
     * For this particular dataset, node style = node data
     */
    private addStylesToNode(node: TreeNode) : TreeNode{
        node.icon = node.data;
        return node;
    }
}
